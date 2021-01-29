import { usePendingLocation } from "@remix-run/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppStateContext } from "../hooks/AppDataState";

const HeaderStyle = styled.header`
    transition: opacity 200ms ease-in-out;
    transitionDelay: 200ms;
`;

const Header = ()=> {
    let pendingLocation = usePendingLocation();
    let [{ user }]= useContext(AppStateContext);

    return (
        <HeaderStyle className="bg-cyan-300" style={{ opacity: !!pendingLocation ? "0.15" : "1" }}>
            <div className="container mx-auto font-semibold pb-2.5 pt-2 flex">
                <nav className="flex-grow">
                    <Link to="/">home</Link>{' '}
                    <Link to="/mdx">MDX</Link>{' '}
                    <Link to="/catchy">catchy</Link>{' '}
                    <Link to="/catchum">catchum</Link>{' '}
                    <Link to="/team">team</Link>{' '}
                    <Link to="/team/mjackson">michael</Link>{' '}
                    <Link to="/team/ryanflorence">ryan</Link>{' '}
                    <Link to="/pages">ryan</Link>{' '}
                </nav>
                { user===0 ? (
                    <div>... loading ...</div>
                ): (
                    user ? (
                        <div>{user.email} <button
                            className="pt-0 pr-2 pb-0 pl-2"
                            onClick={e => (window as any).firebase.auth().signOut() }>logout</button></div>
                    ) : (
                        <div className="cursor-pointer" onClick={e =>{
                            (window as any).firebase.auth().signInWithPopup(new (window as any).firebase.auth.GoogleAuthProvider())
                        }}>login</div>
                    )
                )}
            </div>
        </HeaderStyle>
    )
}

export default Header