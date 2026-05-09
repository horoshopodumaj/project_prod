import { DropdownDirection } from "../../../types/ui";
import cls from './popups.module.scss'

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.bottomLeft,
    'bottom right': cls.bottomRight,
    'top left': cls.topLeft,
    'top right': cls.topRight
}