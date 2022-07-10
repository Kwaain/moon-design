import {useCallback, useEffect, useRef, useState} from "react";
import checkNonSelectedIndex from "./checkNonSelectedIndex";
import Option from "./types/OptionProps";
import {MultiSelectProps, SelectProps, SingleSelectProps} from "./types/SelectProps";

interface Props {
  options: SelectProps["options"],
  onChange: SingleSelectProps["onChange"],
  value: SingleSelectProps["value"] | MultiSelectProps["value"],
  isSearchable: SelectProps["isSearchable"],
  disabled: SelectProps["disabled"],
  amountOfVisibleItems: SelectProps["amountOfVisibleItems"],
  hoveredIndex: number,
  selectedIndex: number,
  setSelectedIndex: (index: number) => any,
  setHoveredIndex: (index: number) => any,
  selectedIndexes?: number[],
  allOptions?: SelectProps["options"],
  onBackspace?: (params?: any) => any
}

const useSelect = ({
 options,
 allOptions = [],
 onChange,
 value,
 hoveredIndex = -1,
 selectedIndexes = [],
 isSearchable,
 disabled,
 amountOfVisibleItems,
 setHoveredIndex,
 setSelectedIndex,
 onBackspace
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [menuOptions, setMenuOptions] = useState<Option[]>(options || []);
  const [inputFocused, setInputFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const selectMenuItem = (value: string) => {
    setMenuOpen(false);
    setSearch('');
    setMenuOptions(allOptions?.length ? allOptions : options);

    if (onChange) onChange(value);
  };
  // Listening keyboard events on input element to toggle menu opening or type search value
  const handleInputKeydown = (e: any) => {
    if (e.key === "Tab") {
      setMenuOpen(false);
    }
    else if (e.key === "Enter") {
      setMenuOpen(false);

      if (onChange && menuOptions?.length) {
        selectMenuItem(menuOptions[isSearchable && search && hoveredIndex < 0 ? 0 : hoveredIndex]?.value);
      }
    }
    else if (e.key === 'ArrowDown') {
      setMenuOpen(true);
    }
    // Deleting search value or multiselect item
    else if ((isSearchable || allOptions?.length) && e.key === 'Backspace') {
      const newSearch = search.split('').splice(0, search.length - 1).join('');

      if (onBackspace && (!isSearchable || !search)) onBackspace();
      else {
        setMenuOpen(true);
        setSearch(newSearch);
        setMenuOptions(options.filter((option: Option) => {
          return option.value.toLowerCase().includes(newSearch.toLowerCase());
        }));
      }
    }
    // Typing search value
    else if (isSearchable && /[a-z0-9]*/.test(e.key) && e.key.length === 1) {
      const newSearch = search + e.key;

      setMenuOpen(true);
      setSearch(newSearch);
      setMenuOptions(options.filter((option: Option) => {
        return option.value.toLowerCase().includes(newSearch.toLowerCase());
      }));
    }
  };

  // Listening global keyboard events to navigate through open menu (if any)
  const handleMenuNavigation = useCallback(
    (e) => {
      if (e && menuOpen) {
        const optionsLength = menuOptions?.length ?? 0;
        let nextHoverIndex = hoveredIndex;

        e.stopPropagation();
        e.preventDefault();

        if (e.key === 'ArrowUp') {
          nextHoverIndex = hoveredIndex > 0 ? hoveredIndex - 1 : optionsLength - 1;

          if (selectedIndexes?.length) {
            nextHoverIndex = checkNonSelectedIndex(nextHoverIndex, allOptions.length - 1, selectedIndexes, 'up');
          }
        }
        else if (e.key === 'ArrowDown') {
          nextHoverIndex = hoveredIndex < optionsLength - 1 ? hoveredIndex + 1 : 0;

          if (selectedIndexes?.length) {
            nextHoverIndex = checkNonSelectedIndex(nextHoverIndex, allOptions.length - 1, selectedIndexes, 'down');
          }
        }

        setHoveredIndex(nextHoverIndex);
      }
    },
    [menuOpen, hoveredIndex]
  );

  const onSelectClick = () => {
    if (!disabled) {
      setMenuOpen(!menuOpen);
      inputRef?.current?.focus();
    }
  };

  const onInputFocus = (focused?: boolean) => {
    setInputFocused(!!focused);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleMenuNavigation);

    return () => document.removeEventListener("keydown", handleMenuNavigation);
  }, [handleMenuNavigation]);

  useEffect(() => {
    const menuElement = menuRef?.current ?? null;

    // Handling number of menu items component prop
    if (
      menuOpen &&
      menuElement?.style &&
      amountOfVisibleItems &&
      amountOfVisibleItems < menuElement.childNodes?.length
    ) {
      menuElement.style.height = `${(menuElement.clientHeight / menuElement.childNodes.length) * amountOfVisibleItems}px`;
    }
    else if (menuElement?.style) {
      menuElement.style.height = 'auto';
    }
  }, [menuRef, menuOpen]);

  useEffect(() => {
    // Handle initial selected menu item background color
    if (menuOpen && options?.length) {
      let selectedItemIndex = -1;

      options.forEach((item: Option, index: number) => {
        if (item.value === value) selectedItemIndex = index;
      });

      if (selectedItemIndex >= 0) {
        setSelectedIndex(selectedItemIndex);
      }
    }
    else if (!menuOpen) setHoveredIndex(-1);
  }, [menuOpen, value])

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (selectRef?.current && !selectRef.current.contains(e.target as Node)) {
        setMenuOpen(false);

        if (isSearchable) {
          setSearch('');
          setMenuOptions(options);
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return { menuOpen, search, menuOptions, inputFocused, inputRef, selectRef, menuRef, onSelectClick, onInputFocus, selectMenuItem, handleInputKeydown, setMenuOpen };
};

export default useSelect;
