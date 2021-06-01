import React, {useState} from 'react';
import {Tooltip} from 'reactstrap';

function Whatwedo(props) {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <div className="col-10 offset-2 whatwedo">
            <div className="row whatwedoRow">
                <div className="lineWhite3">
                    <div className="iconAbout3 text-center d-flex"><img className="mr-4" src="/icons/inbox.svg" alt=""/>
                        <p
                            className="m-auto">What we do</p></div>
                </div>
                {/****************TOLTIPS*********8*/}
                <div className="text-center">
                    <h1><span href="#" id="TooltipExample">web design & build</span></h1>
                    <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Tooltip>
                    <h1><span href="#" id="TooltipExample">print design</span></h1>
                    <Tooltip placement="left" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Tooltip>
                    <h1><span href="#" id="TooltipExample">internet marketing</span></h1>
                    <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Tooltip>
                    <h1><span href="#" id="TooltipExample">consultancy</span></h1>
                    <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Tooltip>
                    <h1><span href="#" id="TooltipExample">hosting & support</span></h1>
                    <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Tooltip>
                </div>

            </div>
        </div>
    );
}

export default Whatwedo;