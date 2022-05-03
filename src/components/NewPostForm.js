import React from "react";
import {Button} from "react-bootstrap";

export function NewPostForm() {
    return(
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Заголовок"
                       aria-describedby="basic-addon2"/>
            </div>

            <div className="input-group mb-3">
                <textarea className="form-control" placeholder="Статья"/>
            </div>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Теги"
                       aria-describedby="basic-addon2"/>
            </div>

            <Button variant="primary">Опубликовать</Button>
        </>
    )}