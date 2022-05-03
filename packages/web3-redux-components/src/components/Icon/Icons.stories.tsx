import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon, { ICONS, Props } from '.';

export default {
    title: 'Graphics/Icons',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: Props) => <Icon {...args} />;

export const Main = Template.bind({});

const args: Props = {
    icon: 'ETH',
    w: 20,
    h: 20,
    transform: 'rotate(20deg)',
};
Main.args = args;

Main.argTypes = {
    icon: {
        options: Object.keys(ICONS),
        control: { type: 'select' },
    },
};
