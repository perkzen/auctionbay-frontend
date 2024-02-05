import { InputHTMLAttributes, useState } from 'react';
import { Input } from '@/components/ui/input';
import EyeIcon from '@/assets/icons/Eye.svg';
import Image from 'next/image';

interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const PasswordInput = (props: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const onTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={'relative'}>
      <Input type={showPassword ? 'text' : 'password'} {...props} />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-4"
        onClick={onTogglePassword}
      >
        <Image
          src={EyeIcon}
          alt={showPassword ? 'Hide password' : 'Show password'}
          height={16}
          width={16}
        />
      </button>
    </div>
  );
};

export default PasswordInput;
