import axios from "axios";
import { CloseButton, SignUpButton } from "../Button";
import { ConfirmPasswordInput, EmailInput, PasswordInput, UsernameInput } from "../Input";
import { useState } from "react";

export function SignUp({ onClick }) {
    
    const [email, setEmailContent] = useState("");

    const handleEmailContentChange = (e) => {
        setEmailContent(e.target.value);
    };

    const [username, setUserNameContent] = useState("");

    const handleUserNameContentChange = (e) => {
        setUserNameContent(e.target.value);
    };

    

    const [password, setPasswordContent] = useState("");

    const handlePasswordContentChange = (e) => {
        setPasswordContent(e.target.value);
    };

    const [confirmPassword, setConfirmPasswordContent] = useState("");

    const handleConfirmPasswordContentChange = (e) => {
        setConfirmPasswordContent(e.target.value);
    };


    const handleSubmit = async (e) => {
        console.log("Fa aona e");

        try {
          const response = await axios.post(`http://127.0.0.1:8080/users`, {
            email,
            username,
            confirmPassword,
          });
    
          console.log('Nouveau commentaire créé:', response.data);
          // Mettez à jour l'état de votre application ou effectuez d'autres actions en cas de succès
          // Réinitialisez le contenu du commentaire après la soumission si nécessaire
          setEmailContent("");
          setUserNameContent("");
          setPasswordContent("");
          setConfirmPasswordContent("");
        } catch (error) {
          console.error('Une erreur s\'est produite lors de la création du commentaire:', error);
          // Gérez l'erreur, affichez un message d'erreur à l'utilisateur, etc.
        }
      };

    return(
        <div className="w-[600px] h-[568px] pb-6 pt-5 shadow-xl bg-gray-50 flex flex-col rounded-xl overflow-y-scroll">
           <CloseButton onclick={onClick}/>
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-[31px] font-medium">Sign Up</h1>
                <form action="" className="flex flex-col gap-10" onSubmit={handleSubmit}>
                    <EmailInput value={email} onChange={handleEmailContentChange}/>
                    <UsernameInput value={username} onChange={handleUserNameContentChange}/>
                    <PasswordInput value={password} onChange={handlePasswordContentChange}/>
                    <ConfirmPasswordInput value={confirmPassword} onChange={handleConfirmPasswordContentChange}/>
                    <SignUpButton />
                </form>
               
            </div>
        </div>
    )
}