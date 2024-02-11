import { forwardRef, useState } from 'react';
import { Input, InputProps } from '@/components/ui/input';
import EyeIcon from '@/assets/icons/Eye.svg';
import Image from 'next/image';
import { cn } from '@/libs/utils';

interface PasswordInputProps extends Omit<InputProps, 'type'> {}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const onTogglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <>
        <div className={'relative'}>
          <Input
            {...props}
            type={showPassword ? 'text' : 'password'}
            ref={ref}
          />
          <button
            type="button"
            className={cn(
              'absolute right-0 top-3  flex cursor-pointer items-center pr-4',
              props.label && '-bottom-6 top-0',
              props.error && props.label && '-top-4'
            )}
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
      </>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
