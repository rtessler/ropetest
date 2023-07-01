
import { FC, ReactNode } from 'react'
import { Card } from "react-bootstrap"
import styles from 'components/home-card.module.css';

type Props = {
    children: ReactNode
    title: string
    paragraphs: string[]
}

export const HomeCard: FC<Props> = (props) => {

    const titleClass = 'card-title h5 ' + styles.ropetest_card_title

    return (
        <div className="card flex-row p-2 border-0 bg-transparent">

                {props.children}
                
                <div className='card-body pt-0'>
                    {/* <h4 className={"card-title " + styles.ropetest_card_title + " h5 h4-sm"}>{props.title}</h4> */}

                    <div className={titleClass}>{props.title}</div>

                    {props.paragraphs.map((text,index) => <Card.Text key={index} className={styles.card_text_spacer}>{text}</Card.Text> )}
 
                </div>
        </div>
    )
}

export default HomeCard;



