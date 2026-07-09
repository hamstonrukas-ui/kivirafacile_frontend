export default async function handler(req, res) {
  // On récupère le paramètre 'action' envoyé par votre frontend
  const { action, category_id, title_id } = req.query;
  
  // On reconstruit l'URL vers votre vrai backend
  // Note : remplacez l'URL par l'adresse exacte de votre fichier PHP
  const targetUrl = `https://kivirafacile.hstn.me/api/library_api.php?action=${action}${category_id ? '&category_id=' + category_id : ''}${title_id ? '&title_id=' + title_id : ''}`;

  try {
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        // Ces headers font croire au serveur Aeonfree qu'il s'agit d'un appel API légitime
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    const data = await response.json();
    
    // On renvoie le JSON au frontend
    res.status(200).json(data);
  } catch (error) {
    console.error('Erreur proxy:', error);
    res.status(500).json({ success: false, error: 'Impossible de joindre le serveur distant' });
  }
      }
