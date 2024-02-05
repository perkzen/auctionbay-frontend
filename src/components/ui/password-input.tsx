import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { Input } from '@/components/ui/input';
import EyeIcon from '@/assets/icons/Eye.svg';
import Image from 'next/image';
import * as React from 'react';

interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  error?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const { error, ...rest } = props;

    const errorClass = props.error
      ? 'border-red-500 focus:border-red-500 focus-visible:border-red-500'
      : '';

    const onTogglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <>
        <div className={'relative'}>
          <Input
            {...rest}
            type={showPassword ? 'text' : 'password'}
            ref={ref}
            className={error && errorClass}
          />
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
        {props.error && (
          <small className={'text-sm font-light text-red-500'}>
            {props.error}
          </small>
        )}
      </>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
