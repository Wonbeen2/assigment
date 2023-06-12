import React from 'react';
import Image from 'next/image';

interface BadgeProps {
  title: string;
  onDelete?: () => void;
}

const Badge = ({ title, onDelete }: BadgeProps) => {
  return (
    <div className="bg-gray-04 px-8 py-2 rounded-full flex items-center">
      <span className="text-14">{title}</span>
      {onDelete && (
        <button className="ml-5" onClick={onDelete}>
          <Image src="/assets/cancel.svg" alt="cancel" width={10} height={10} />
        </button>
      )}
    </div>
  );
};

export default Badge;
