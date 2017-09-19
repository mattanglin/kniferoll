export const makeAnimation = ({
  name,
  from,
  to,
  on,
  duration
}) => ({
  [`& .${name}-enter`]: {
    ...from
  },
  [`& .${name}-enter.${name}-enter-active`]: {
    ...to,
    transition: `${on} ${duration}ms ease-in-out`,
  },
  [`& .${name}-exit`]: {
    ...to,
  },
  [`& .${name}-exit.${name}-exit-active`]: {
    ...from,
    transition: `${on} ${duration}ms ease-in-out`,
  }
});
