/** @jsx jsx */
import { jsx } from 'theme-ui';
import CardLabel from './CardLabel';

export default p => {
  const { url, content, label, ismail } = p;
  const directTo = ismail ? `mailto:${url}` : url;
  return (
    <div
        {...p}
        sx={{
          fontSize: [1,2],
          color: ['black'],
          lineHeight: ['heading'],
          fontFamily: 'body',
          paddingBottom: [2,3,4]
        }}
    >
      <CardLabel>{label}</CardLabel>
      <a
        href={directTo}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontFamily: 'heading',
          pb: 0,
          borderBottom: theme => theme.linkDecoration,
          transition: theme => theme.transitions[0],
          textDecoration: 'none',
          color: 'text',
          '&:hover': {
            opacity: .5
          }
        }}
      >
        {content}
      </a>
    </div>
  )
}