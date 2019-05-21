import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';

const styles = {
  card: {
    margin: '10px 0',
  },
  secondly: {
    display: 'flex',
    alignItems: 'center',

    "& div": {
      paddingRight: '20px',
      verticalAlign: 'middle'
    }
  },
  icon: {
    position: "relative",
    top: 3,
    fontSize: 18
  }
};

const RepositoryInfo = props => {
  const { classes, data } = props;
  return (
    <Card className={classes.card} elevation={3}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <Link href={data.html_url} target="_blank" rel="noopener">
            {data.full_name}
          </Link>
        </Typography>
        <Typography variant="subtitle1">
          {data.description}
        </Typography>
        <Typography variant="subtitle2" className={classes.secondly}>
          <Typography component='div'>
            Updated on {data.updated_at}
          </Typography>
          <Typography component='div'>
            <Icon className={classes.icon}>star</Icon>
            {data.stargazers_count}
          </Typography>
          <Typography component='div'>
            {data.language}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  )
};

RepositoryInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};
export default withStyles(styles)(RepositoryInfo);