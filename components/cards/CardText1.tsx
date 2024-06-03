// components/Card1Text.tsx
import { ReactNode } from 'react';

type Card1TextProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const Card1Text = ({ icon, title, description }: Card1TextProps) => {
  return (
    <div className="rounded-lg shadow-black  bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-2xl dark:bg-gray-950">
      <div className="mb-4 h-8 w-8 text-gray-900 dark:text-gray-50">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default Card1Text;
