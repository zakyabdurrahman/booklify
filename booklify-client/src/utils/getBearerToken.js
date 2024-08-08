export default function getBearerToken() {
    const token =  localStorage.getItem('access_token');
    return `Bearer ${token}`;
}