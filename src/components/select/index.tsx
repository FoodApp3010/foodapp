import React, { FC } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";
import { cn } from "@/utils";

const SelectDemo: FC<Select.SelectProps> = (props) => (
  <Select.Root {...props}>
    <Select.Trigger className={styles.Trigger} aria-label="Food">
      <Select.Value placeholder="Thành phố" />
      <Select.Icon className={styles.Icon}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={styles.Content}>
        <Select.Viewport className={styles.Viewport}>
          <SelectItem value="Hồ Chí Minh">Hồ Chí Minh</SelectItem>
          <SelectItem value="Hà Nội">Hà Nội</SelectItem>
          <SelectItem value="Khác">Khác</SelectItem>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }) => {
  return (
    <Select.Item className={cn(styles.Item, className)} {...props}>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});

export default SelectDemo;
