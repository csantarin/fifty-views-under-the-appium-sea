import React from 'react';
import { View, ViewProps } from 'react-native';

interface NestedViewProps extends ViewProps {
	/**
	 * The amount of `<View>` nested elements to create.
	 */
    noOfLayers?: number;
}

const NestedView = (props: React.PropsWithChildren<NestedViewProps>) => {
    const { noOfLayers = 0, children, ...rest } = props;

    if (noOfLayers == 0) {
        return (children || null) as React.ReactElement;
    }

	const newNoOfLayers = noOfLayers - 1;

    return (
        <View {...rest}>
            <NestedView noOfLayers={newNoOfLayers}>
				{children}
            </NestedView>
        </View>
    ); 
};

export default NestedView;
