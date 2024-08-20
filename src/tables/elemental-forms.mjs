import { combinations } from "../utility/combinations.mjs";
import { elements } from "./elements.mjs";
import { forms } from "./forms.mjs";

export const elementalForms = combinations(elements, forms);
