interface CSSObject {
  [key: string]: CSSObject | string | number | undefined
}

declare const tw: (arg: TemplateStringsArray) => CSSObject
