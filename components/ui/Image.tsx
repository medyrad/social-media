import NextImage, { ImageProps as NextImageProps } from 'next/image'

export interface ImageProps extends Omit<NextImageProps, 'alt' | 'placeholder'> {
	alt: string
	placeholderType?: 'blur' | 'empty'
}

export default function Image({
	src,
	alt,
	width,
	height,
	className,
	placeholderType = 'empty',
	...rest
}: ImageProps) {
	return (
		<NextImage
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={className}
			placeholder={placeholderType}
			{...rest}
		/>
	)
}
