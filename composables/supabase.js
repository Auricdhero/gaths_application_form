import { useSupabaseClient, useSupabaseUser } from '@supabase/supabase-js';

const Auth = () => {
    const supabaseClient = useSupabaseClient();
    const { user } = useSupabaseUser();
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        try {
            const { token, user } = await supabaseClient.auth.signIn(email, password)
            return { token, user }
        } catch (err) {
            setError(err);
        }
    };

    return {
        user,
        login,
        error
    };
}

export default Auth;