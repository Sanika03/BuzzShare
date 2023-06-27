import { Nav } from "./nav";
import { SuggestedUsers } from "./suggestedUsers";

export const SinglePost = () => {
    return (
        <div style={{margin: "5rem"}}>
            <Nav />

            This is singlePost

            <SuggestedUsers />
        </div>
    )
}