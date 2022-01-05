import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import * as STYLE from '../../styles/mail/preview';
import * as ICON from 'react-icons/ai';

const MailPreview = (props: any) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [select, setSelect] = useState(false)
  const [hovered, setHovered] = useState(false)
  const actions = [
    {
      type: 'Archive',
      icon: <ICON.AiFillFolderAdd />
    },
    {
      type: 'Delete',
      icon: <ICON.AiFillDelete />
    },
    {
      type: 'Mark as read',
      icon: <ICON.AiFillFolderOpen />
    },
    {
      type: 'Favourite',
      icon: <ICON.AiFillStar />
    },
  ]

  return (
      <STYLE.Container 
        read={props.data.read} 
        hovered={hovered} 
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
        <STYLE.Section>
            <Checkbox 
              {...label}
              style={{
                padding: 0
              }}
              checked={select}
              onChange={() => setSelect(!select)}
              sx={{
                color: '#a3a3a3',
                '& .MuiButtonBase-root': { padding: 0 },
              }} 
            />
          <STYLE.Icon><ICON.AiOutlineStar /></STYLE.Icon>
        </STYLE.Section>
        <STYLE.Section>
            <STYLE.Text read={props.data.read}>{props.data.name}</STYLE.Text>
        </STYLE.Section>
        <STYLE.Section>
            <div><STYLE.Text read={props.data.read}>{props.data.title}</STYLE.Text> - {props.data.content}</div>
            <STYLE.Ellipsis read={props.data.read}>...</STYLE.Ellipsis>
        </STYLE.Section>
        <STYLE.Section extras>
            {hovered ? (
                actions.map((item: any) => {
                    return <STYLE.Icon hovered={hovered}>{item.icon}</STYLE.Icon>
                })
            ) : (
                <STYLE.Text read={props.data.read}>{props.data.time}</STYLE.Text>
            )}
            
        </STYLE.Section>
      </STYLE.Container>
  );
}

export default MailPreview;