import { Meta, StoryObj } from '@storybook/react';
import Skeleton from './index';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Skeleton>;
export const Default: Story = {};
