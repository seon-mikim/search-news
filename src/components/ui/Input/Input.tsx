import React, { ForwardedRef,forwardRef } from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {}
const Input =({ className, ...props }:InputProps, ref: ForwardedRef<HTMLInputElement>) => {
	return <input {...props} ref={ref } className={className } />;
};

export default forwardRef<HTMLInputElement, InputProps>(Input);
