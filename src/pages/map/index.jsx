import React, { useState, useEffect } from 'react';
import './index.css';
import ImageMap from '../../assets/area.png';
import { areas } from './data';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom';


export default function CemeteryMap() {
    const [blocks, setBlocks] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        console.log(isModalVisible);
        setIsModalVisible(!isModalVisible);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        console.log('closing modal');
        setIsModalVisible(false);
    };

    useEffect(() => {
        setBlocks(areas);
    });

    // import area.png inside the assets folder
    return (
        <div className='map-container'>
            <div className='map-searchbox'>

            </div>
            <img src={ImageMap} alt="cemetery" />



            {
                blocks.map((block, index) => {
                    return <div 
                    className={block?.name} 
                    key={index}
                    style={{top: block?.areaY, left: block?.areaX}}> 
                        {
                            block?.lots?.map((lot, index) => {
                                return <Link
                                to='/view'
                                state={{ details: {...lot, block: block.name} }}
                                onClick={showModal} 
                                key={index} 
                                className={lot.lotName} 
                                style={{fontSize: '.7rem', backgroundColor: lot?.occupied ? 'green' : 'red', height: lot?.size, top: lot.areaY, left: lot.areaX}}>
                                    {lot.lot}
                                </Link>
                            })
                        }
                    </div>
                })
            }
        </div>
    );
}

