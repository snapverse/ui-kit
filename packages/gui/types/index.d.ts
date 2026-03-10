import type * as React from "react";

namespace SnapUI {
  //
  // Snapverse UI Declarations
  // ----------------------------------------------------------------------

  // Utility Types
  // ----------------------------------------------------------------------
  type TagType<O, Tag extends keyof O> = O[Tag] extends object ? O[Tag] : never;

  /**
   * Used to merge between two interfaces
   *
   * @template Left left side of the intersection
   * @template Right right side of the intersection
   *
   * @example
   *
   * ```tsx
   * interface Date { date: 'DD/MM/YYYY' }
   * interface Time { time: 'HH:mm:ss' }
   * // Now this type creates an object based on the two passed interfaces
   * type Datetime = Merge<Date, Time>
   * ```
   *
   * @example
   *
   * ```tsx
   * // Notice that the right side is beight prioritize on top of the left side
   * interface BreadRecipe { salt: string, flour: string }
   * interface CakeRecipe { sugar: string, flour: number }
   * type MixedRecipe = Merge<BreadRecipe, CakeRecipe>
   * //                                    ^^^^^^^^^^ key repeated "flour"
   * // { salt: string, sugar: string, flour: number }
   * ```
   */
  type Merge<Left, Right> = Omit<Left, keyof Right> & Right;

  // Extended Types
  // ----------------------------------------------------------------------
  type CSSStyleProps = TagType<HTMLDivElement, "style">;
  type ComponentAttributes = Merge<
    Omit<React.HTMLAttributes<HTMLDivElement>, "style">,
    CSSStyleProps
  >;

  // Extended Props
  // ----------------------------------------------------------------------
  export interface ComponentProps extends ComponentAttributes {
    children?: React.ReactNode;
  }
}

export default SnapUI;
