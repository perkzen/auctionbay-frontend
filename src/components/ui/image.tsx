import NextImage, { ImageProps as NextImageProps } from 'next/image';
import Link, { LinkProps } from 'next/link';

export interface ImageProps extends NextImageProps {
  maxWidth?: number;
  maxHeight?: number;
  LinkProps?: LinkProps;
}

const Image = ({ maxWidth, maxHeight, LinkProps, ...props }: ImageProps) => {
  const image = (
    <NextImage
      quality={100}
      {...props}
      alt={props.alt}
      style={{
        objectFit: 'contain',
        ...props?.style,
        maxWidth: `${maxWidth}px`,
        maxHeight: `${maxHeight}px`,
      }}
    />
  );

  return LinkProps?.href ? <Link {...LinkProps}>{image}</Link> : image;
};

export default Image;
