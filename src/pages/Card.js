import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import { Link, useNavigate} from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  const clickCardDetail = () => {
    navigate('/detail');
  }

  return (
    <Card sx={{ maxWidth: "445px" }} onClick={clickCardDetail}>
      <Grid container spacing={2}>
        <Grid item>
        <CardMedia
          component="img"
          height="168px"
          width="115.86px"
          image="https://spnimage.edaily.co.kr/images/photo/files/NP/S/2023/04/PS23040400051.jpg"
          alt="Paella dish"
        />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs>
            <CardHeader
              title="스즈메의 문단속" //book title
              subheader="신카이 마코토" //author
            />
            <CardContent>
              <Typography variant="body1" gutterBottom>
                180000원
              </Typography>
              <Typography variant="body2" gutterBottom>
                2023.04.16
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        
      </Grid>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit >
        <CardContent sx={{textAlign:"center", overflow: "scroll hidden", height:"10px" }}>
        <ul>
          <li>스마트융합대학</li>

          <li>디지털 공학</li>

          <li>장준혁 교수</li>

          <li>신현수</li>
        </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}