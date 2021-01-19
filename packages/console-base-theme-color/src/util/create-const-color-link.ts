import {
  IColorLink,
  IColorText
} from '../types';

/**
 * 链接
 * 
 * * LINK_XX
 *   - `LINK_PRIMARY`
 *   - `LINK_SECONDARY`
 *   - `LINK_TERTIARY` 
 *   - `LINK_BRAND` 
 *   - `LINK_BRAND_SECONDARY` 
 * * 每个 LINK_XX 会有以下变种 _VISITED / _HOVER / _ACTIVE 三个变种
 *   - `_VISITED` 对 `:visited`
 *   - `_HOVER` 对 `:hover` + `:focus`
 *   - `_ACTIVE` 对 `:active`
 * * 一个 LINK_DISABLED
 */
export default function createConstColorLink(FG: IColorText): IColorLink {
  return {
    LINK_PRIMARY: FG.TEXT_ACCENT,
    LINK_PRIMARY_VISITED: FG.TEXT_ACCENT,
    LINK_PRIMARY_HOVER: FG.TEXT_ACCENT_HOVER,
    LINK_PRIMARY_ACTIVE: FG.TEXT_ACCENT_ACTIVE,
    LINK_SECONDARY: FG.TEXT_SECONDARY,
    LINK_SECONDARY_VISITED: FG.TEXT_SECONDARY,
    LINK_SECONDARY_HOVER: FG.TEXT_ACCENT,
    LINK_SECONDARY_ACTIVE: FG.TEXT_ACCENT,
    LINK_TERTIARY: FG.TEXT_SECONDARY,
    LINK_TERTIARY_VISITED: FG.TEXT_SECONDARY,
    LINK_TERTIARY_HOVER: FG.TEXT_PRIMARY,
    LINK_TERTIARY_ACTIVE: FG.TEXT_PRIMARY,
    LINK_BRAND: FG.TEXT_BRAND,
    LINK_BRAND_VISITED: FG.TEXT_BRAND,
    LINK_BRAND_HOVER: FG.TEXT_BRAND_HOVER,
    LINK_BRAND_ACTIVE: FG.TEXT_BRAND_ACTIVE,
    LINK_BRAND_SECONDARY: FG.TEXT_SECONDARY,
    LINK_BRAND_SECONDARY_VISITED: FG.TEXT_SECONDARY,
    LINK_BRAND_SECONDARY_HOVER: FG.TEXT_BRAND,
    LINK_BRAND_SECONDARY_ACTIVE: FG.TEXT_BRAND,
    LINK_DISABLED: FG.TEXT_DISABLED
  };
}