import * as colors from './colors'
import * as typography from './typography'

export const light = {
  primaryColor: colors.indigo800,
  accentColor: colors.indigo200,
  baseTextColor: colors.gray700,
  highlightTextColor: colors.indigo800,
  strongTextColor: colors.gray900,
  subduedTextColor: colors.gray500,
  inverseTextColor: colors.white,
  listSeparatorColor: colors.indigo100,
  bodyBackgroundColor: colors.indigo50,
  bodyText: {
    ...typography.bodyText,
    color: colors.gray700
  }
}
export const dark = {
  primaryColor: colors.gray800,
  accentColor: colors.indigo800,
  baseTextColor: colors.gray200,
  highlightTextColor: colors.indigo300,
  strongTextColor: colors.gray50,
  subduedTextColor: colors.gray300,
  inverseTextColor: colors.indigo300,
  listSeparatorColor: colors.gray600,
  bodyBackgroundColor: colors.gray700,
  bodyText: {
    ...typography.bodyText,
    color: colors.gray200
  }
}
