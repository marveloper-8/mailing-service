import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as STYLE from '../../styles/navigation/side';
import NavigationItem from '../../widgets/navigation-items';
import * as ICON from 'react-icons/ai';

const NavigationSide = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState("Inbox")
    const menuItems = [
        {
            type: "primary",
            subItems: [
                {
                    icon: <ICON.AiOutlineInbox />,
                    text: "Inbox",
                    route: '/'
                },
                {
                    icon: <ICON.AiOutlineSend />,
                    text: "Sent",
                    route: '/sent'
                },
                {
                    icon: <ICON.AiOutlineFile />,
                    text: "Drafts",
                    route: '/'
                },
                {
                    icon: <ICON.AiOutlineStar />,
                    text: "Starred",
                    route: '/'
                },
                {
                    icon: <ICON.AiOutlineDelete />,
                    text: "Trash",
                    route: '/'
                },
                {
                    icon: <ICON.AiOutlineExclamationCircle />,
                    text: "Spam",
                    route: '/'
                },
                {
                    icon: <ICON.AiOutlineStop />,
                    text: "Muted",
                    route: '/'
                }, 
            ]
        } ,
        {
            type: "extras",
            subItems: [
                {
                    icon: <ICON.AiOutlineSetting />,
                    text: "Settings",
                    route: '/'
                },
                {
                    icon: <ICON.AiOutlineQuestionCircle />,
                    text: "FAQ",
                    route: '/'
                },
            ]
        } 
    ]
  return (
      <STYLE.Container>
          <div>
            <STYLE.Compose>COMPOSE</STYLE.Compose>
            {menuItems.map((item: any) => {
                return (
                    <STYLE.Section>
                        {item.subItems.map((subItems: any) => {
                            return (
                                <Link 
                                    onClick={() => setActive(subItems.text)}
                                    to={subItems.route}
                                >
                                    <NavigationItem
                                        icon={subItems.icon}
                                        text={subItems.text}
                                        route={subItems.route}
                                        active={subItems.text === active}
                                    />
                                </Link>
                            )
                        })}
                    </STYLE.Section>
                )
            })}
          </div>
      </STYLE.Container>
  );
}

export default NavigationSide;