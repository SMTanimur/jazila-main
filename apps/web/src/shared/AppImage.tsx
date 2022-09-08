/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

const AppImage = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLImageElement>) => {
    const { src, ...otherProps } = props;

    return <img alt="" {...otherProps} src={src} ref={ref} />;
  }
);

export default AppImage;
