import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import * as STYLE from '../../styles/navigation/nav-action-bar';
import * as ICON from 'react-icons/ai';

const NavActionBar = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const actions = [
    {
      type: 'Archive',
      icon: <ICON.AiFillFolderAdd />
    },
    {
      type: 'Mark as Spam',
      icon: <ICON.AiFillExclamationCircle />
    },
    {
      type: 'Delete',
      icon: <ICON.AiFillDelete />
    },
    {
      type: 'Mark as Read',
      icon: <ICON.AiFillFolderOpen />
    },
    {
      type: 'Move',
      icon: <ICON.AiFillRightSquare />
    },
    {
      type: 'Favourite',
      icon: <ICON.AiFillStar />
    },
    {
      type: 'Mute',
      icon: <ICON.AiOutlineStop />
    },
    {
      type: 'Snooze',
      icon: <ICON.AiFillClockCircle />
    },
  ]
  const [select, setSelect] = useState(false)

  return (
      <STYLE.Container>
        <STYLE.Section>
          <STYLE.SelectAll>
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
          </STYLE.SelectAll>
          {select ? (
            <>
              {actions.map((item: any) => {
                return <STYLE.Icon>{item.icon}</STYLE.Icon>
              })}
            </>
          ) : (
            <STYLE.Icon>
              <ICON.AiOutlineReload />
            </STYLE.Icon>
          )}
        </STYLE.Section>
        <STYLE.Section>
          <STYLE.Icon navigation>
            <ICON.AiOutlineCaretLeft />
          </STYLE.Icon>
          1 - 50 of 12,523
          <STYLE.Icon navigation>
            <ICON.AiOutlineCaretRight />
          </STYLE.Icon>
        </STYLE.Section>
      </STYLE.Container>
  );
}

export default NavActionBar;