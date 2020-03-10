/** @jsx jsx */
import { jsx } from 'theme-ui';

// const SidebarWrapper = styled.div`
//   display: block;
//   background: #fefefe;
//   display: flex;
//   box-shadow: ${(props) => props.theme.boxShadow};
//   z-index: 1000000;
//   position: absolute;
//   height: calc((100vh - 0px) - 24px);
//   margin: 12px;
//   transform: ${(props) =>
//     props.isVisible ? "translate3d(0, 0, 0)" : "translate3d(-110%, 0, 0)"
//   };
//   transition: transform 0.5s, box-shadow 0.5s;
//   overflow: auto;
//   -webkit-overflow-scrolling: touch;
// `;

// calc(('100vh' - '0px') - '24px')

export default p => {
  const { isVisible, label } = p;
  const transform = isVisible ? "translate3d(0, 0, 0)" : "translate3d(-105%, 0, 0)";
  return (
    <div
      {...p}
      sx={{
        display: 'flex',
        background: 'white',
        boxShadow: isVisible ? theme => theme.boxShadow : 'none',
        margin: 3,
        zIndex: 1000000,
        position: 'absolute',
        height: 'calc((100vh - 0px) - 24px)',
        transform: transform,
        transition: theme => theme.transitions[2],
        overflow: 'auto'
      }}
    >
    </div>
  )
}