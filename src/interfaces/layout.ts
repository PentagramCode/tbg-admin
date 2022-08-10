/**
 * This interface describes the properties of the layout routes.
 * @typeParam { number } id - Route identifier
 * @typeParam { string } title - Route title
 * @typeParam { string } path - Route path
 * @typeParam { string } icon - Route icon
 */
export interface IRoutes {
    id: number;
    title: string;
    path: string;
    icon:string;
}

/**
 * This interface describes the properties of the component ToggleDark.
 * @typeParam { string } className - CSS styles
 */
export interface IToggleDark {
    className: string
}


