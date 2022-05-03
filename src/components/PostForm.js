import React from "react";

export function PostForm(props) {
    return (
        <>
            <div>
                Автор: {props.author}
            </div>
            <div className="input-group mb-3 mt-3">
                <div type="text" className="form-control" aria-describedby="basic-addon2">
                    {props.post.title}
                </div>
            </div>

            <div className="input-group mb-3">
                <div type="text" className="form-control" aria-describedby="basic-addon2">
                    {props.post.body}
                </div>
            </div>

            <div className="input-group mb-3">
                <div type="text" className="form-control" aria-describedby="basic-addon2">
                    {props.post.tags}
                </div>
            </div>
        </>
    )
}