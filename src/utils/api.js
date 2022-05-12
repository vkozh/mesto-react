class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _fetch(path, method, bodyObject, renderLoading) {
    if (renderLoading) renderLoading(true);
    return fetch(`${this._url}${path}`, {
      method: method,
      headers: this._headers,
      body: bodyObject ? JSON.stringify(bodyObject) : undefined,
    })
      .then(this._checkResponse)
      .finally(() => {
        if (renderLoading) renderLoading(false);
      });
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUser() {
    return this._fetch("/users/me", "GET");
  }

  getCards() {
    return this._fetch("/cards", "GET");
  }

  editProfile(name, about, renderLoading) {
    return this._fetch(
      "/users/me",
      "PATCH",
      {
        name: name,
        about: about,
      },
      renderLoading
    );
  }

  addCard(name, link, renderLoading) {
    return this._fetch(
      "/cards",
      "POST",
      {
        name: name,
        link: link,
      },
      renderLoading
    );
  }

  deleteCard(cardId) {
    return this._fetch(`/cards/${cardId}`, "DELETE");
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked
      ? this._fetch(`/cards/${cardId}/likes`, "PUT")
      : this._fetch(`/cards/${cardId}/likes`, "DELETE");
  }

  changeAvatar(avatar, renderLoading) {
    return this._fetch(
      "/users/me/avatar",
      "PATCH",
      {
        avatar: avatar,
      },
      renderLoading
    );
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-39",
  headers: {
    authorization: "d0163cf8-cfab-4a34-ac21-cc13d220d7ff",
    "Content-Type": "application/json",
  },
});
export default api;
