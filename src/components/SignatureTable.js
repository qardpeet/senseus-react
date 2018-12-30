import React from 'react';

const SignatureTable = ({ signatures }) => {
    const signatureTable = signatures.map((signature, index) => {
        const name = signature.lastName
            ? `${signature.firstName} ${signature.lastName}`
            : signature.firstName;
        return (
            <tr key={index}>
                <td>
                    <img src={`https://robohash.org/${name}123.png`} alt="robot-guy" />
                </td>
                <td>
                    <p>{name}</p>
                </td>
            </tr>
        );
    });

    return <>{signatureTable}</>;
};

export default SignatureTable;
