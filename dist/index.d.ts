/// <reference types="react" />
import React from 'react';
import { ViewStyle } from 'react-native';
export interface Props {
    style?: ViewStyle;
    color?: string;
    velocityFilterWeight?: number;
    minWidth?: number;
    maxWidth?: number;
    minDistance?: number;
    onChange?: (event: {
        nativeEvent: {
            count: number;
            length: number;
            target: number;
        };
    }) => void;
    testID?: string;
}
export default class SignaturePad extends React.Component<Props> {
    private signaturePad;
    render(): JSX.Element;
    clear(): void;
    capture(method: 'base64' | 'file', details: {
        path?: string;
    }): Promise<string | null>;
    private onRef;
}
