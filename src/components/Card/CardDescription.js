/** @jsx jsx */
import { jsx } from 'theme-ui';

import CardLabel from './CardLabel';

export default p => {
  const { type, size, label, content } = p;
  const fontColor = type === 'white' ? 'background' : 'text';
  const fontSize = size == 'responsive' ? [1,2] : 2;
  return (
    <div
      {...p}
      sx={{
        fontSize: fontSize,
        color: ['background'],
        fontFamily: ['heading'],
        lineHeight: ['heading'],
        color: [fontColor],
        paddingBottom: [2,3],
        transition: theme => theme.transitions[0],
      }}
    >
      <CardLabel>{label}</CardLabel>
      {content}
    </div>
  )
}