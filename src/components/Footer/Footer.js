import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} all right reserved.`}
      </span>
      <Link secondary className={styles.link} href="https://www.facebook.com/rajkumararyal0977" target="_self">
        Crafted by Rajkumar Aryal
      </Link>
    </Text>
  </footer>
);
