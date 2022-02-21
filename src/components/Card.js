import styles from './Card.module.css';

const Card = (props) => {
  const { tag, children } = props;

  const childProps = {
    className: styles.card,
    ...props,
    children: undefined,
    tag: undefined
  }

  switch (tag) {
    case 'form':
      return <form {...childProps}>{children}</form>
    case 'ul':
      return <ul {...childProps}>{children}</ul>
    default:
      return <div {...childProps}>{children}</div>
  }
}

export default Card;