module.exports = {
  'react/display-name': 1,
  'react/jsx-wrap-multilines': ['off'],
  'react/jsx-closing-bracket-location': ['error', 'after-props'],
  'react/jsx-closing-tag-location': ['off'],
  /**
   * 有的人倾向于以析构的形式书写 props，如：
   * 
   * ```
   * <Some {...{
   *   // any props inside
   * }} />
   * ```
   * 
   * 而有的插件，比如 jsx-a11y 可能要求你写在外边，比如 img 的 alt 属性：
   * 
   * ```
   * <img {...{
   *   // any props
   * }} alt="alt text" />
   * ```
   * 
   * 所以以下两条规则禁用
   */
  'react/jsx-first-prop-new-line': ['off'],
  'react/jsx-max-props-per-line': ['off'],
  'react/sort-comp': [1, {
    order: [
      'displayName',
      'propTypes',
      'defaultProps',
      'childContextTypes',
      'static-methods',
      'state',
      'instance-variables',
      'instance-methods',
      'everything-else',
      'lifecycle',
      'render',
      '/^_?render.+$/'
    ]
  }]
};
