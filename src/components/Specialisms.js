import React from 'react';
import {UncontrolledCollapse} from 'reactstrap';

function Specialisms(props) {
    return (
        <div className="col-10 offset-2 specialisms">
            <div className="row specialismsRow">
                <div className="lineWhite4">
                    <div className="iconAbout4 text-center d-flex"><img className="mr-4" src="/icons/inbox.svg" alt=""/>
                        <p
                            className="m-auto">Specialisms</p></div>
                </div>
                {/***********TOGLER*/}
                <div className="pt-5 pb-5">
                    {/***********Website Design Essex*/}
                    <div className="tog">
                        <button className="btn butTogler w-100 mt-5" id="toggler">
                            Website Design Essex

                        </button>
                        <UncontrolledCollapse toggler="#toggler">
                            <h1 className="text-center mt-4 text-white">
                                Website Design Essex
                            </h1>
                            <div className="lineGreen m-auto mt-3 mb-3">
                            </div>
                            <p className="text-center text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid architecto <br/>
                                asperiores consequatur debitis dignissimos dolor, doloremque earum eius eligendi harum
                                in, <br/>
                                molestiae non nostrum quasi tempora tenetur ut. A ex magnam odio quaerat tenetur!
                                Animi,<br/>
                                blanditiis cum dolor illo inventore ipsa iure nihil optio, quam recusandae reiciendis
                                ut?<br/>
                            </p>
                            <p className="text-center text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid architecto <br/>
                                asperiores consequatur debitis dignissimos dolor, doloremque earum eius eligendi harum
                                in

                            </p>
                            <button className="btn readMoreButton btn-danger m-auto d-block mb-4">Read more</button>
                        </UncontrolledCollapse>
                    </div>
                    {/***********Craft CMS Developres*/}
                    <div className="tog">
                        <button className="btn butTogler w-100 mt-2" id="toggler2">
                            Craft CMS Developres
                        </button>
                        <UncontrolledCollapse toggler="#toggler2">
                            <h1 className="text-center mt-4 text-white">
                                Craft CMS Developres
                            </h1>
                            <div className="lineGreen m-auto mt-3 mb-3">
                            </div>
                            <p className="text-center text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid architecto <br/>
                                asperiores consequatur debitis dignissimos dolor, doloremque earum eius eligendi harum
                                in, <br/>
                                molestiae non nostrum quasi tempora tenetur ut. A ex magnam odio quaerat tenetur!
                                Animi,<br/>
                                blanditiis cum dolor illo inventore ipsa iure nihil optio, quam recusandae reiciendis
                                ut?<br/>
                            </p>
                            <p className="text-center text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid architecto <br/>
                                asperiores consequatur debitis dignissimos dolor, doloremque earum eius eligendi harum
                                in

                            </p>
                            <button className="btn readMoreButton btn-danger m-auto d-block mb-4">Read more</button>
                        </UncontrolledCollapse>
                    </div>
                    {/*********** Website Hosting Essex*/}
                    <div className="tog">
                        <button className="btn butTogler w-100 mt-2" id="toggler3">
                            Website Hosting Essex
                        </button>
                        <UncontrolledCollapse toggler="#toggler3">
                            <h1 className="text-center mt-4 text-white">
                                Craft CMS Developres
                            </h1>
                            <div className="lineGreen m-auto mt-3 mb-3">
                            </div>
                            <p className="text-center text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid architecto <br/>
                                asperiores consequatur debitis dignissimos dolor, doloremque earum eius eligendi harum
                                in, <br/>
                                molestiae non nostrum quasi tempora tenetur ut. A ex magnam odio quaerat tenetur!
                                Animi,<br/>
                                blanditiis cum dolor illo inventore ipsa iure nihil optio, quam recusandae reiciendis
                                ut?<br/>
                            </p>
                            <p className="text-center text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid architecto <br/>
                                asperiores consequatur debitis dignissimos dolor, doloremque earum eius eligendi harum
                                in

                            </p>
                            <button className="btn readMoreButton btn-danger m-auto d-block mb-4">Read more</button>

                        </UncontrolledCollapse>
                    </div>
                    {/************  Website Developres*/}
                    <div className="tog">
                        <button className="btn butTogler w-100 mt-2" id="toggler4">
                            Website Developres
                        </button>
                        <UncontrolledCollapse toggler="#toggler4">
                            <h1 className="text-center mt-4 text-white">
                                Craft CMS Developres
                            </h1>
                            <div className="lineGreen m-auto mt-3 mb-3">
                            </div>
                            <p className="text-center text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid architecto <br/>
                                asperiores consequatur debitis dignissimos dolor, doloremque earum eius eligendi harum
                                in, <br/>
                                molestiae non nostrum quasi tempora tenetur ut. A ex magnam odio quaerat tenetur!
                                Animi,<br/>
                                blanditiis cum dolor illo inventore ipsa iure nihil optio, quam recusandae reiciendis
                                ut?<br/>
                            </p>
                            <p className="text-center text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid architecto <br/>
                                asperiores consequatur debitis dignissimos dolor, doloremque earum eius eligendi harum
                                in
                            </p>
                            <button className="btn readMoreButton btn-danger m-auto d-block mb-4">Read more</button>

                        </UncontrolledCollapse>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Specialisms;