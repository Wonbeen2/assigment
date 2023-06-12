'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface DropdownProps {
  placeholder?: string;
  options: {
    key: string;
    text: string;
  }[];
  name: string;
  value: string[] | string;
  onClick?: (name: string, key: string) => void;
}

const Dropdown = ({ placeholder, options, name, value, onClick }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const handleOnClick = (name: string, key: string) => {
    onClick?.(name, key);
    setOpen(false);
  };

  const isValueArray = Array.isArray(value);
  const isValue = isValueArray ? value.length : value;

  console.log(isValue);
  return (
    <div className={`relative flex flex-col gap-5 w-150`}>
      <button
        onClick={toggle}
        className={`flex items-center justify-between p-14 border-1 border-gray-01 h-42 rounded-full ${
          isValue && 'bg-primary border-primary'
        }`}
      >
        <span className={`${isValue && 'text-white'}`}>{placeholder}</span>
        {isValue ? (
          <div className="flex items-center justify-center bg-white w-20 h-20 rounded-full">
            <span className="text-primary text-12">{isValue}</span>
          </div>
        ) : (
          <Image src="/assets/arrow-down.svg" alt="arrow" width={15} height={15} />
        )}
      </button>
      {open && (
        <ul className="z-10 bg-white absolute top-48 w-full border-1 border-gray-02 rounded-md flex flex-col p-12 gap-10">
          {options.map((option) => (
            <li role="button" key={option.key} onClick={() => handleOnClick(name, option.key)}>
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
