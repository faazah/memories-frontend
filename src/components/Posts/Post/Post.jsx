import useStyles from './styles';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';


export const Post = ({post, setCurrentId}) =>{
    const dispatch = useDispatch();
    const classes = useStyles();
    const {_id, creator, message, title, createdAt, selectedFile, tags, likeCount} = post;
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={selectedFile} title={title}/>
            <div className={classes.overlay}>
                <Typography variant='h6'>{creator}</Typography>
                <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size='small' onClick={() =>{setCurrentId(_id)}}>
                    <MoreHorizIcon fontSize='medium'/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{tags.map((tag) => (`#${tag} `))}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>{title}</Typography>
            <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>{message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() =>{ dispatch(likePost(_id))}}>
                    <ThumbUpAltIcon fontSize='small'/>
                    &nbsp; Like &nbsp;
                    {likeCount}
                </Button>
                <Button size='small' color='primary' onClick={() =>{dispatch(deletePost(_id))}}>
                    <DeleteIcon fontSize='small'/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}