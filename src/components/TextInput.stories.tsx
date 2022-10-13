import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";
import { Meta, StoryObj } from '@storybook/react'
import { EnvelopeSimple } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
                <TextInput.Icon>
                    <EnvelopeSimple />
                </TextInput.Icon>,
                <TextInput.Input placeholder="Type your E-mail adress" />
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder="Type your E-mail adress" />
    }
}
