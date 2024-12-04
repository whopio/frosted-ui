import React from "react";

export const getValidChildren = <T>(children: React.ReactNode) => {
	return React.Children.toArray(children).filter((child) =>
		React.isValidElement(child),
	) as React.ReactElement<T>[];
};
